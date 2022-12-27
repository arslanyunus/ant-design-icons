// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareRightTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareRightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareRightTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareRightTwoTone: ArrowSquareRightTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareRightTwoToneSvg}></AntdIcon>;
};

ArrowSquareRightTwoTone.displayName = 'ArrowSquareRightTwoTone';
ArrowSquareRightTwoTone.inheritAttrs = false;
export default ArrowSquareRightTwoTone;