// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareDownTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareDownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareDownTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareDownTwoTone: ArrowSquareDownTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareDownTwoToneSvg}></AntdIcon>;
};

ArrowSquareDownTwoTone.displayName = 'ArrowSquareDownTwoTone';
ArrowSquareDownTwoTone.inheritAttrs = false;
export default ArrowSquareDownTwoTone;