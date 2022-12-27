// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FavoriteChartOutlineSvg from '@ant-design/icons-svg/lib/asn/FavoriteChartOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FavoriteChartOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FavoriteChartOutline: FavoriteChartOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FavoriteChartOutlineSvg}></AntdIcon>;
};

FavoriteChartOutline.displayName = 'FavoriteChartOutline';
FavoriteChartOutline.inheritAttrs = false;
export default FavoriteChartOutline;