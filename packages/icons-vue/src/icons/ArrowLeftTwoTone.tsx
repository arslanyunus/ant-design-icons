// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeftTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowLeftTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeftTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeftTwoTone: ArrowLeftTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeftTwoToneSvg}></AntdIcon>;
};

ArrowLeftTwoTone.displayName = 'ArrowLeftTwoTone';
ArrowLeftTwoTone.inheritAttrs = false;
export default ArrowLeftTwoTone;