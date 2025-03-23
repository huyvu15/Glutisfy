<div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Total Reach', value: '5.2M', color: 'from-violet-600 to-fuchsia-600' },
                  { label: 'Engagement', value: '96%', color: 'from-fuchsia-600 to-rose-600' },
                  { label: 'Platforms', value: '20+', color: 'from-rose-600 to-orange-600' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20"
                  >
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>