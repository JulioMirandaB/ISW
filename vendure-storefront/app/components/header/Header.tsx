import { Link, useLoaderData } from '@remix-run/react';
import { ShoppingBagIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { SearchBar } from '~/components/header/SearchBar';
import { useRootLoader } from '~/utils/use-root-loader';
import { UserIcon } from '@heroicons/react/24/solid';
import { useScrollingUp } from '~/utils/use-scrolling-up';
import { classNames } from '~/utils/class-names';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export function Header({
  onCartIconClick,
  cartQuantity,
}: {
  onCartIconClick: () => void;
  cartQuantity: number;
}) {
  const data = useRootLoader();
  const isSignedIn = !!data.activeCustomer.activeCustomer?.id;
  const isScrollingUp = useScrollingUp();
  const { t } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header
      className={classNames(
        isScrollingUp ? 'sticky top-0 z-50 animate-dropIn' : '',
        'bg-gradient-to-r from-zinc-700 to-gray-900 shadow-lg  shadow-xl',
      )}
    >
      <div className="max-w-6xl mx-auto p-4 flex items-center space-x-4">
        <h1 className="text-white w-30">
          <Link to="/">
            <img
              src="https://aeiom.com/isw/Logo-ISW-header.png"
              width={100}
              height={64}
              alt={t('common.logoAlt')}
            />
          </Link>
        </h1>
        <div className="flex space-x-4 hidden sm:block">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-1 bg-gray-800 text-gray-200 hover:text-white p-2 rounded"
            >
              <span>Products</span>
              <ChevronDownIcon className="w-5 h-5" />
            </button>
            {dropdownOpen && (
              <ul className="absolute z-20 bg-gray-800 text-white shadow-lg rounded mt-2">
                {data.collections.map((collection) => (
                  <h1><li key={collection.id} className="border-b-2 border-blue-900 hover:bg-gray-700">
                    <Link
                      to={'/collections/' + collection.slug}
                      className="block text-sm p-2"
                      onClick={() => setDropdownOpen(false)}
                      prefetch="intent"
                    >
                      {collection.name}
                    </Link>
                  </li></h1>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="flex-1 md:pr-8">
          <SearchBar />
        </div>
        <div className="">
          <button
            className="relative w-9 h-9 bg-white bg-opacity-20 rounded text-white p-1"
            onClick={onCartIconClick}
            aria-label="Open cart tray"
          >
            <ShoppingBagIcon />
            {cartQuantity ? (
              <div className="absolute rounded-full -top-2 -right-2 bg-primary-600 min-w-6 min-h-6 flex items-center justify-center text-xs p-1">
                {cartQuantity}
              </div>
            ) : (
              ''
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
