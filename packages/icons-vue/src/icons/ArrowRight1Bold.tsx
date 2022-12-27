// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight1BoldSvg from '@ant-design/icons-svg/lib/asn/ArrowRight1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight1Bold: ArrowRight1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight1BoldSvg}></AntdIcon>;
};

ArrowRight1Bold.displayName = 'ArrowRight1Bold';
ArrowRight1Bold.inheritAttrs = false;
export default ArrowRight1Bold;