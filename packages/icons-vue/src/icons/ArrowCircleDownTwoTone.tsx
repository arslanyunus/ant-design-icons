// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleDownTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleDownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleDownTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleDownTwoTone: ArrowCircleDownTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleDownTwoToneSvg}></AntdIcon>;
};

ArrowCircleDownTwoTone.displayName = 'ArrowCircleDownTwoTone';
ArrowCircleDownTwoTone.inheritAttrs = false;
export default ArrowCircleDownTwoTone;