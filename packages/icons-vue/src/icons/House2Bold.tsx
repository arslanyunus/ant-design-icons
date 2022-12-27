// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import House2BoldSvg from '@ant-design/icons-svg/lib/asn/House2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface House2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const House2Bold: House2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={House2BoldSvg}></AntdIcon>;
};

House2Bold.displayName = 'House2Bold';
House2Bold.inheritAttrs = false;
export default House2Bold;