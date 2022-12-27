// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight1TwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowRight1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight1TwoTone: ArrowRight1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight1TwoToneSvg}></AntdIcon>;
};

ArrowRight1TwoTone.displayName = 'ArrowRight1TwoTone';
ArrowRight1TwoTone.inheritAttrs = false;
export default ArrowRight1TwoTone;