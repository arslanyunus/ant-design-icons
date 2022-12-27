// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Sun1LinearSvg from '@ant-design/icons-svg/lib/asn/Sun1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Sun1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Sun1Linear: Sun1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Sun1LinearSvg}></AntdIcon>;
};

Sun1Linear.displayName = 'Sun1Linear';
Sun1Linear.inheritAttrs = false;
export default Sun1Linear;