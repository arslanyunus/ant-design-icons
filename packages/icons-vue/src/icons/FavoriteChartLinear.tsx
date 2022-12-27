// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FavoriteChartLinearSvg from '@ant-design/icons-svg/lib/asn/FavoriteChartLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FavoriteChartLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FavoriteChartLinear: FavoriteChartLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FavoriteChartLinearSvg}></AntdIcon>;
};

FavoriteChartLinear.displayName = 'FavoriteChartLinear';
FavoriteChartLinear.inheritAttrs = false;
export default FavoriteChartLinear;