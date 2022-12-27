// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Save2BoldSvg from '@ant-design/icons-svg/lib/asn/Save2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Save2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Save2Bold: Save2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Save2BoldSvg}></AntdIcon>;
};

Save2Bold.displayName = 'Save2Bold';
Save2Bold.inheritAttrs = false;
export default Save2Bold;