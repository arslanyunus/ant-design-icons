// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Support24LinearSvg from '@ant-design/icons-svg/lib/asn/Support24Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Support24LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Support24Linear: Support24LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Support24LinearSvg}></AntdIcon>;
};

Support24Linear.displayName = 'Support24Linear';
Support24Linear.inheritAttrs = false;
export default Support24Linear;