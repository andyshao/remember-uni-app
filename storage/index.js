const storage = {
	set: (key, value) => {
		uni.setStorageSync(key, value);
	},
	get: (key) => {
		const value = uni.getStorageSync(key);
		return value;
	},
	remove: (key) => {
		uni.removeStorageSync(key);
	},
	clear: () => {
		uni.clearStorageSync();
	}
};

export default storage;
