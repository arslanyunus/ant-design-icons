// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDown1BoldSvg from '@ant-design/icons-svg/lib/asn/ArrowDown1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDown1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDown1Bold: ArrowDown1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDown1BoldSvg}></AntdIcon>;
};

ArrowDown1Bold.displayName = 'ArrowDown1Bold';
ArrowDown1Bold.inheritAttrs = false;
export default ArrowDown1Bold;