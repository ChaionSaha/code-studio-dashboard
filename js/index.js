'use strict';

const sidebar = document.querySelector('#sidebar');

const sidebarToggle = () => {
	sidebar.classList.toggle('sidebar-show');
};

const customTabs = document.querySelectorAll('.custom-tab');
const tabContents = document.querySelectorAll('.tab-content');
if (customTabs) {
	customTabs.forEach((ct) => {
		ct.addEventListener('click', (e) => {
			e.preventDefault();
			customTabs.forEach((c) => {
				c.classList.remove('custom-tab-active');
			});
			e.target.classList.add('custom-tab-active');
			tabContents.forEach((tc) => {
				tc.classList.remove('active-tab-content');
				tc.classList.add('hidden');
			});
			document
				.querySelector(`#${e.target.dataset.target}`)
				.classList.add('active-tab-content');
			document
				.querySelector(`#${e.target.dataset.target}`)
				.classList.remove('hidden');
		});
	});
}
