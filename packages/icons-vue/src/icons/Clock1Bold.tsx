// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Clock1BoldSvg from '@ant-design/icons-svg/lib/asn/Clock1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Clock1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Clock1Bold: Clock1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Clock1BoldSvg}></AntdIcon>;
};

Clock1Bold.displayName = 'Clock1Bold';
Clock1Bold.inheritAttrs = false;
export default Clock1Bold;