// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRightTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowRightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRightTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRightTwoTone: ArrowRightTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRightTwoToneSvg}></AntdIcon>;
};

ArrowRightTwoTone.displayName = 'ArrowRightTwoTone';
ArrowRightTwoTone.inheritAttrs = false;
export default ArrowRightTwoTone;