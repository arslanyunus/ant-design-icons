// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp1BoldSvg from '@ant-design/icons-svg/lib/asn/ArrowUp1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp1Bold: ArrowUp1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp1BoldSvg}></AntdIcon>;
};

ArrowUp1Bold.displayName = 'ArrowUp1Bold';
ArrowUp1Bold.inheritAttrs = false;
export default ArrowUp1Bold;