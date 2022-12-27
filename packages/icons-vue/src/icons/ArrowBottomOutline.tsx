// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowBottomOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowBottomOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowBottomOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowBottomOutline: ArrowBottomOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowBottomOutlineSvg}></AntdIcon>;
};

ArrowBottomOutline.displayName = 'ArrowBottomOutline';
ArrowBottomOutline.inheritAttrs = false;
export default ArrowBottomOutline;