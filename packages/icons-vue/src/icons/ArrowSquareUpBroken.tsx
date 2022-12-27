// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareUpBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareUpBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareUpBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareUpBroken: ArrowSquareUpBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareUpBrokenSvg}></AntdIcon>;
};

ArrowSquareUpBroken.displayName = 'ArrowSquareUpBroken';
ArrowSquareUpBroken.inheritAttrs = false;
export default ArrowSquareUpBroken;