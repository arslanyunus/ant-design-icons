// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Save2OutlineSvg from '@ant-design/icons-svg/lib/asn/Save2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Save2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Save2Outline: Save2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Save2OutlineSvg}></AntdIcon>;
};

Save2Outline.displayName = 'Save2Outline';
Save2Outline.inheritAttrs = false;
export default Save2Outline;