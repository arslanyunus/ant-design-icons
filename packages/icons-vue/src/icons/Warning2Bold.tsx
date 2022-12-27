// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Warning2BoldSvg from '@ant-design/icons-svg/lib/asn/Warning2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Warning2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Warning2Bold: Warning2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Warning2BoldSvg}></AntdIcon>;
};

Warning2Bold.displayName = 'Warning2Bold';
Warning2Bold.inheritAttrs = false;
export default Warning2Bold;