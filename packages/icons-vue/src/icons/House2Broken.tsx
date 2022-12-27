// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import House2BrokenSvg from '@ant-design/icons-svg/lib/asn/House2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface House2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const House2Broken: House2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={House2BrokenSvg}></AntdIcon>;
};

House2Broken.displayName = 'House2Broken';
House2Broken.inheritAttrs = false;
export default House2Broken;