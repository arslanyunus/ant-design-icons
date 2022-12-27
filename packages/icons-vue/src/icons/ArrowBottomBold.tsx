// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowBottomBoldSvg from '@ant-design/icons-svg/lib/asn/ArrowBottomBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowBottomBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowBottomBold: ArrowBottomBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowBottomBoldSvg}></AntdIcon>;
};

ArrowBottomBold.displayName = 'ArrowBottomBold';
ArrowBottomBold.inheritAttrs = false;
export default ArrowBottomBold;