// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareDownBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareDownBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareDownBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareDownBroken: ArrowSquareDownBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareDownBrokenSvg}></AntdIcon>;
};

ArrowSquareDownBroken.displayName = 'ArrowSquareDownBroken';
ArrowSquareDownBroken.inheritAttrs = false;
export default ArrowSquareDownBroken;