// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import House2OutlineSvg from '@ant-design/icons-svg/lib/asn/House2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface House2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const House2Outline: House2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={House2OutlineSvg}></AntdIcon>;
};

House2Outline.displayName = 'House2Outline';
House2Outline.inheritAttrs = false;
export default House2Outline;