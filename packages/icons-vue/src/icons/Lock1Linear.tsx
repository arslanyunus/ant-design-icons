// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Lock1LinearSvg from '@ant-design/icons-svg/lib/asn/Lock1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Lock1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Lock1Linear: Lock1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Lock1LinearSvg}></AntdIcon>;
};

Lock1Linear.displayName = 'Lock1Linear';
Lock1Linear.inheritAttrs = false;
export default Lock1Linear;