// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Glass1BoldSvg from '@ant-design/icons-svg/lib/asn/Glass1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Glass1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Glass1Bold: Glass1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Glass1BoldSvg}></AntdIcon>;
};

Glass1Bold.displayName = 'Glass1Bold';
Glass1Bold.inheritAttrs = false;
export default Glass1Bold;