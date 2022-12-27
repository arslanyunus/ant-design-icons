// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ComponentBrokenSvg from '@ant-design/icons-svg/lib/asn/ComponentBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ComponentBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ComponentBroken: ComponentBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ComponentBrokenSvg}></AntdIcon>;
};

ComponentBroken.displayName = 'ComponentBroken';
ComponentBroken.inheritAttrs = false;
export default ComponentBroken;