// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RedoBulkSvg from '@ant-design/icons-svg/lib/asn/RedoBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RedoBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RedoBulk: RedoBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedoBulkSvg}></AntdIcon>;
};

RedoBulk.displayName = 'RedoBulk';
RedoBulk.inheritAttrs = false;
export default RedoBulk;