import functools


def maxAve(*args):
		args = list(args)
		args.sort()
		holder = []
		a = 1

		def red(arr):
				return functools.reduce(lambda a, b: a + b, arr)

		def ave(arr):
		    return red(arr)/len(arr)

		for i in range(1, len(args)):
				a1 = args[0:i]
				a2 = args[i:]
				
				a3 = abs(red(a1) - red(a2))
				holder.append(a3)
				if len(holder) > 2:
						if (holder[-2]) < (holder[-1]):
								a = i - 1
								break

		return abs(ave(args[0:a]) - ave(args[a:]))


print(maxAve(1, 2, 3, 4, 5))
print(maxAve(2, 4, 6, 8, 10, 12))
