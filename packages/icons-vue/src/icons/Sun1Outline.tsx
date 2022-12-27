// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Sun1OutlineSvg from '@ant-design/icons-svg/lib/asn/Sun1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Sun1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Sun1Outline: Sun1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Sun1OutlineSvg}></AntdIcon>;
};

Sun1Outline.displayName = 'Sun1Outline';
Sun1Outline.inheritAttrs = false;
export default Sun1Outline;