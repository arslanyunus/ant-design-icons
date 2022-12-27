// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/ChartSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartSquareTwoTone: ChartSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartSquareTwoToneSvg}></AntdIcon>;
};

ChartSquareTwoTone.displayName = 'ChartSquareTwoTone';
ChartSquareTwoTone.inheritAttrs = false;
export default ChartSquareTwoTone;