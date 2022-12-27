// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft2TwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft2TwoTone: ArrowLeft2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft2TwoToneSvg}></AntdIcon>;
};

ArrowLeft2TwoTone.displayName = 'ArrowLeft2TwoTone';
ArrowLeft2TwoTone.inheritAttrs = false;
export default ArrowLeft2TwoTone;