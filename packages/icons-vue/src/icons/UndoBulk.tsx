// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UndoBulkSvg from '@ant-design/icons-svg/lib/asn/UndoBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UndoBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UndoBulk: UndoBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UndoBulkSvg}></AntdIcon>;
};

UndoBulk.displayName = 'UndoBulk';
UndoBulk.inheritAttrs = false;
export default UndoBulk;