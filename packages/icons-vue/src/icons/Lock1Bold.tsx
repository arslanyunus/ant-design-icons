// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Lock1BoldSvg from '@ant-design/icons-svg/lib/asn/Lock1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Lock1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Lock1Bold: Lock1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Lock1BoldSvg}></AntdIcon>;
};

Lock1Bold.displayName = 'Lock1Bold';
Lock1Bold.inheritAttrs = false;
export default Lock1Bold;