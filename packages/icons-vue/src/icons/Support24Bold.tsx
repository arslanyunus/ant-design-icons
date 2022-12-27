// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Support24BoldSvg from '@ant-design/icons-svg/lib/asn/Support24Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Support24BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Support24Bold: Support24BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Support24BoldSvg}></AntdIcon>;
};

Support24Bold.displayName = 'Support24Bold';
Support24Bold.inheritAttrs = false;
export default Support24Bold;