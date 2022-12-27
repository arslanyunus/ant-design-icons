// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight2BoldSvg from '@ant-design/icons-svg/lib/asn/ArrowRight2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight2Bold: ArrowRight2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight2BoldSvg}></AntdIcon>;
};

ArrowRight2Bold.displayName = 'ArrowRight2Bold';
ArrowRight2Bold.inheritAttrs = false;
export default ArrowRight2Bold;