// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DollarSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/DollarSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DollarSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DollarSquareTwoTone: DollarSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DollarSquareTwoToneSvg}></AntdIcon>;
};

DollarSquareTwoTone.displayName = 'DollarSquareTwoTone';
DollarSquareTwoTone.inheritAttrs = false;
export default DollarSquareTwoTone;