// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Buildings2OutlineSvg from '@ant-design/icons-svg/lib/asn/Buildings2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Buildings2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Buildings2Outline: Buildings2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Buildings2OutlineSvg}></AntdIcon>;
};

Buildings2Outline.displayName = 'Buildings2Outline';
Buildings2Outline.inheritAttrs = false;
export default Buildings2Outline;