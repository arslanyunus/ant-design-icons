// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft3TwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft3TwoTone: ArrowLeft3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft3TwoToneSvg}></AntdIcon>;
};

ArrowLeft3TwoTone.displayName = 'ArrowLeft3TwoTone';
ArrowLeft3TwoTone.inheritAttrs = false;
export default ArrowLeft3TwoTone;