// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FavoriteChartTwoToneSvg from '@ant-design/icons-svg/lib/asn/FavoriteChartTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FavoriteChartTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FavoriteChartTwoTone: FavoriteChartTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FavoriteChartTwoToneSvg}></AntdIcon>;
};

FavoriteChartTwoTone.displayName = 'FavoriteChartTwoTone';
FavoriteChartTwoTone.inheritAttrs = false;
export default FavoriteChartTwoTone;