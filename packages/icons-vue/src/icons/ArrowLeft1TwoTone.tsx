// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft1TwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft1TwoTone: ArrowLeft1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft1TwoToneSvg}></AntdIcon>;
};

ArrowLeft1TwoTone.displayName = 'ArrowLeft1TwoTone';
ArrowLeft1TwoTone.inheritAttrs = false;
export default ArrowLeft1TwoTone;