// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FavoriteChartBoldSvg from '@ant-design/icons-svg/lib/asn/FavoriteChartBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FavoriteChartBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FavoriteChartBold: FavoriteChartBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FavoriteChartBoldSvg}></AntdIcon>;
};

FavoriteChartBold.displayName = 'FavoriteChartBold';
FavoriteChartBold.inheritAttrs = false;
export default FavoriteChartBold;