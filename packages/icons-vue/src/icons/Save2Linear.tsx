// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Save2LinearSvg from '@ant-design/icons-svg/lib/asn/Save2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Save2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Save2Linear: Save2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Save2LinearSvg}></AntdIcon>;
};

Save2Linear.displayName = 'Save2Linear';
Save2Linear.inheritAttrs = false;
export default Save2Linear;