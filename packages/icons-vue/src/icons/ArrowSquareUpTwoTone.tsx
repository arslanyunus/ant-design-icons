// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareUpTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareUpTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareUpTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareUpTwoTone: ArrowSquareUpTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareUpTwoToneSvg}></AntdIcon>;
};

ArrowSquareUpTwoTone.displayName = 'ArrowSquareUpTwoTone';
ArrowSquareUpTwoTone.inheritAttrs = false;
export default ArrowSquareUpTwoTone;