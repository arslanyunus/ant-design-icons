// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import House2LinearSvg from '@ant-design/icons-svg/lib/asn/House2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface House2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const House2Linear: House2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={House2LinearSvg}></AntdIcon>;
};

House2Linear.displayName = 'House2Linear';
House2Linear.inheritAttrs = false;
export default House2Linear;