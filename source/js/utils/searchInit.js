const searchForm = document.querySelector('#searchForm');
const searchLink = document.querySelector('#searchLink');
const header = document.querySelector('.header');
const searchInput = searchForm.querySelector('input');

const closeSearch = (evt) => {
  if (!evt.target.closest('#searchLink')) {
    searchForm.classList.remove('user-nav__search-form--active');
    document.removeEventListener('click', closeSearch);
  }
};

const searchInit = () => {
  const openSearch = (evt) => {
    if (evt.target !== searchLink) {
      return;
    }

    searchForm.classList.add('user-nav__search-form--active');
    searchInput.focus();
    document.addEventListener('click', closeSearch);
  };

  const closeSearchOnKey = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Enter') {
      searchForm.classList.remove('user-nav__search-form--active');
    }
  };

  header.addEventListener('click', openSearch);
  document.addEventListener('keydown', closeSearchOnKey);
};

export {searchInit};
