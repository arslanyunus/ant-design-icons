// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FavoriteChartBrokenSvg from '@ant-design/icons-svg/lib/asn/FavoriteChartBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FavoriteChartBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FavoriteChartBroken: FavoriteChartBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FavoriteChartBrokenSvg}></AntdIcon>;
};

FavoriteChartBroken.displayName = 'FavoriteChartBroken';
FavoriteChartBroken.inheritAttrs = false;
export default FavoriteChartBroken;