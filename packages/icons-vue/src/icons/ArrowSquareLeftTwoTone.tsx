// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareLeftTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareLeftTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareLeftTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareLeftTwoTone: ArrowSquareLeftTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareLeftTwoToneSvg}></AntdIcon>;
};

ArrowSquareLeftTwoTone.displayName = 'ArrowSquareLeftTwoTone';
ArrowSquareLeftTwoTone.inheritAttrs = false;
export default ArrowSquareLeftTwoTone;