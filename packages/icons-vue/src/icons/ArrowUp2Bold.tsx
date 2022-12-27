// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp2BoldSvg from '@ant-design/icons-svg/lib/asn/ArrowUp2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp2Bold: ArrowUp2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp2BoldSvg}></AntdIcon>;
};

ArrowUp2Bold.displayName = 'ArrowUp2Bold';
ArrowUp2Bold.inheritAttrs = false;
export default ArrowUp2Bold;